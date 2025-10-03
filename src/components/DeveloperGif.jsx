import React from 'react'

export default function DeveloperGif() {
  return (
    <picture>
      <source media="(min-width: 650px)" srcSet="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif" />
      <source media="(min-width: 465px)" srcSet="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif" />
      <img 
        src="https://media.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif" 
        alt="funny gif" 
      />
    </picture>
  )
}
