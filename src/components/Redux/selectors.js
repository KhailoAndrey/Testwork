import { createSelector } from "@reduxjs/toolkit";

export const selectFollowers = state => state.followers;

export const selectUsers = state => state.users;

export const selectVisibleContacts = createSelector(
  [ selectUsers, selectFollowers],
  (users, followers) => {
   return users.filter(user => user.name.toLowerCase()
          .includes(followers.toLowerCase()))
  }
)