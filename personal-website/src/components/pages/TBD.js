import React from 'react';
import '../../App.css';

export default function TBD() {
    return (
      <div style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <i class="fa-solid fa-circle-exclamation" style={{
            paddingRight: '20px',
            fontSize: '36px',
            color: 'red',
        }}></i>
        <h1 className='tbd' style={{
            fontSize: '48px',
            color: 'crimson',
            textShadow: '0 0 0.5em black',
        }}>
            
          Work in Progress... Come Back Later!
        </h1>
        <i class="fa-solid fa-circle-exclamation" style={{
            paddingLeft: '20px',
            fontSize: '36px',
            color: 'red',
        }}></i>
      </div>
    );
  }