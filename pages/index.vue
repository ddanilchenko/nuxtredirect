<template>
  <div>
    <h1>Pretty ULRs feature is ON</h1>
    <div>
       <a href='/subfolder/'>/subfolder/</a> - 200, produces page content, OK - 200, produces page content, OK
    </div>
      <div>
      <a href='/subfolder'>/subfolder</a> - 301 to /subfolder/, OK
    </div>
    <div>
      <a href='/subfolder///'>/subfolder///</a> - 301 to /subfolder/, OK
    </div>

    <div>
       <a href='/'>/</a> - 200, produces page content, OK
    </div>
    <div>
      <a href='///'>///</a> - 200, produces page content, not OK - expected 301 to /
    </div>
    <div>
      $curl -IL https://admiring-curie-585c96.netlify.app/
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
