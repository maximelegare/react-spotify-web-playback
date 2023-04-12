/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite';

const path = require('path');

export default defineConfig({
  build:{
    lib:{
      name:"react-spotity-web-playback",
      entry: path.resolve(__dirname, 'src/index.js')
    },
    rollupOptions:{
      external:["react"],
      output:{
        globals:{
          React:'react'
        }
      }
    }
    
    
  },
  plugins: [reactRefresh()]
  
})