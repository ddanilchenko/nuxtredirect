export default function ({ redirect, route }) {
    if (!route.name) {
      redirect(302, "/not-found/")
    }
}