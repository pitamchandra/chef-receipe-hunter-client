import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef()
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4,2]
    };
    return (
        <>
            <div className="container my-5">
                <div className='d-md-flex justify-content-between align-items-center'>
                    <h2>See your questions and answers</h2>
                    <Pdf targetRef= {ref} filename = 'questions-answers.pdf'>
                        {({toPdf}) => <button onClick={toPdf} className='btn btn-warning'>Download Questions</button>}
                    </Pdf>
                </div>
                <div ref={ref}>
                    <div className='my-4'>
                        <h4>Tell us the differences between uncontrolled and controlled components.</h4>
                        <p>Controlled components are React components that render a form input element and manage the state of that input element. The component also handles changes to the input value through an onChange event handler, which updates the state with the new value. <strong>On the other hand</strong>, uncontrolled components are React components that render a form input element but don't manage the state of that input element. Instead, the input element manages its own state internally using the DOM. </p>
                    </div>
                    <div className='my-4'>
                        <h4>How to validate React props using PropTypes?</h4>
                        <p>React provides a package called prop-types that allows you to define the expected types and values of the props that are passed to a component. This helps to catch errors and improve the stability and maintainability of your codebase.</p>
                    </div>
                    <div className='my-4'>
                        <h4>Tell us the difference between nodejs and express js.</h4>
                        <p>Node.js is a JavaScript runtime that allows developers to write server-side code using JavaScript. It's built on top of the V8 JavaScript engine, which is also used by Google Chrome. Node.js provides an event-driven, non-blocking I/O model that makes it suitable for building scalable and high-performance applications. Node.js comes with built-in modules that allow developers to handle various tasks such as file system access, networking, and HTTP/HTTPS requests. <strong>on the other hand,Express.js,</strong>  is a web application framework for Node.js. It provides a set of features and tools that make it easier to build web applications and APIs using Node.js. Express.js builds on top of Node.js and adds more functionality, such as middleware for handling requests and responses, routing for mapping URLs to controllers, and template engines for rendering dynamic views.</p>
                    </div>
                    <div className='my-4'>
                        <h4>What is a custom hook, and why will you create a custom hook?</h4>
                        <p>A custom hook in React is a function that encapsulates reusable logic that can be shared between different components. Custom hooks allow you to extract common functionality from your components and share it across your application. custom hooks are a powerful feature in React that can help you write cleaner, more reusable code. Custom hooks can make your component code more readable and concise by abstracting away complex logic and implementation details. </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;