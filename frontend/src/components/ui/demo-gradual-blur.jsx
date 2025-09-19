import React from 'react';
import GradualBlur from './gradual-blur';

function ExampleSection() {
  return (
    <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 2rem' }}>
        <img
          src="https://images.unsplash.com/photo-1656536665219-da2b7deb314b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unsplash example"
          style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
        />
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}

export default ExampleSection;
