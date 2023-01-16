export default {
  server: {
    port: 8080,
    proxy: {
      '/emotions': 'http://localhost:3000',
      '/costumes': 'http://localhost:3000',
      '/images': 'http://localhost:3000'
    }
  },
  build: {
    outDir: 'build'
  }
}
