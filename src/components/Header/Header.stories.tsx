import { Header } from "."

export default {
  title: "Components/Header",
}

export const HeaderStory = () => (
  <Header toggleSideNav={() => console.log("clicked")} />
)
