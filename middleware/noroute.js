export default function ({ redirect, route }) {
    if (!route.name) {
      redirect(404, "/not-found/")
    }
  }