import axios from "axios";
import { atom, selector } from "recoil";

// Define the atom with an asynchronous selector as the default
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      try {
        const res = await axios.get("https://sum-server.100xdevs.com/notifications");
        return res.data;
      } catch (error) {
        console.error('Error fetching notifications:', error);
        return { network: 0, jobs: 0, messaging: 0, notifications: 0 }; // return a default value or handle error appropriately
      }
    }
  })
});

// Define a selector that computes the total count from notificationsAtom
export const totalCountSelector = selector({
  key: "totalCount",
  get: ({ get }) => {
    const notif = get(notificationsAtom);
    // Ensure notif is not undefined or null before accessing properties
    if (notif) {
      return notif.network + notif.job + notif.messages + notif.notifications;
    }
    return 0; // default value if notif is not available
  }
});