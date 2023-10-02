import toast from "react-hot-toast"

/**
 * Sends the user a toast notification with the provided icon and text
 *
 * @param icon - The emoji for the toast notification
 * @param text - The text for the toast notification
 */
export function notify(icon: string, text: string) {
  return toast.success(text, {
    duration: 2500,
    icon,
    position: "bottom-center",
    style: {
      background: "#27374b",
      borderRadius: "10px",
      color: "#fff",
    },
  })
}
