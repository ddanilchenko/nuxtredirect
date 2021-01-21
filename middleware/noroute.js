export default function ({ redirect, route }) {
  console.log('noroute welcomes you')
    if (!route.name) {
      redirect(302, "/not-found/")
    }
}