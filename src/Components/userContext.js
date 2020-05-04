import React, { Component } from 'react'

const UserContext = React.createContext('Developer_Moseti');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }