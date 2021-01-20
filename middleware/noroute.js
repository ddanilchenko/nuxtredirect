export default function ({ redirect, route }) {
    console.log('noroute==', route)
  
    if (!route.name) {
  
      //dirty hack for redirect from root doc with multiple trailing slashes to single trailing slash 
      const moreTanTwoRootTrailingSlashesRegex = new RegExp('^(\/)\{2,\}\$', 'g')
      const moreThanTwoTrailingSlashes = moreTanTwoRootTrailingSlashesRegex.test(route.path)
      
      if (moreThanTwoTrailingSlashes) {
        console.log('root file name redirect goes here:', route.path)
        redirect(301, "/")
        return
      }
      
      redirect(404, "/not-found/")
    }
  }