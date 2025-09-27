'use client'

import Login from "@/components/Login";
import SubscriptionDisplay from "@/components/SubscriptionDisplay";
import SubscriptionForm from "@/components/SubscriptionForm";
import SubscriptionSummary from "@/components/SubscriptionSummary";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const blankSubscription = {
        name: '',
        category: 'Web Services',
        cost: '',
        currency: 'USD',
        billingFrequency: 'Monthly',
        nextBillingData: '',
        paymentMethod: 'Credit Card',
        startDate:'',
        renewalType:'',
        notes:'',
        status:'Active'
    }

export default function DashboardPage() {
  const [isAddEntry, setIsAddEntry] = useState(false)

  const [formData, setFormData] = useState(blankSubscription)
  const { userData, currentUser, handleDeleteSubscription, loading } = useAuth()
  const isAuthenticated = !!currentUser

  function handleChangeInput(e) {
      const newData = {
          ...formData,
          [e.target.name] : e.target.value
      }
      setFormData(newData)
  }

  function handleEditSubscription(index) {
    const data = userData.subscriptions.find((val, valIndex) => {
      return valIndex === index

    })
    setFormData(data)
    handleDeleteSubscription(index)
    setIsAddEntry(true)
  }
  
  function handleResetForm() {
    setFormData(blankSubscription)
  }

  function handleToggleInput() {
    setIsAddEntry(!isAddEntry)
  }

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (!isAuthenticated) {
    return (
      <Login />
    )
  }

  return (
    <>
        <SubscriptionSummary />
        <SubscriptionDisplay handleEditSubscription={handleEditSubscription} handleShowInput={isAddEntry ? () => { } : handleToggleInput}/>
        {isAddEntry && (
          <SubscriptionForm handleResetForm={handleResetForm} closeInput={handleToggleInput} formData={formData}
          handleChangeInput={handleChangeInput} />
        )}
        
    </>
  );
}
