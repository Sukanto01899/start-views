import React from 'react';

const Blogs = () => {
    return (
        <article className='w-10/12 mx-auto mt-5'>
            <div className='mb-5'>
                <h3 className='text-xl font-semibold'>What is context api?</h3>
                <p>
                Context allows passing data through the component tree without passing props down manually at every level.In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.
                </p>
            </div>
            <div className='mb-5'>
                <h3 className='text-xl font-semibold'>What is semantic tag?</h3>
                <p>
                In any language, it is essential to understand the meaning of words during communication. And if this is a computer communication then it becomes more critical. So HTML5 provides more semantic elements which make easy understanding of the code.Hence Semantics defines the meaning of words and phrases, i.e.Semantic elements= elements with a meaning. Semantic elements have a simple and clear meaning for both, the browser and the developer.
                </p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>What is inline & block element?</h3>
                <p>
                Block level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible. The p element is an example of a block level element. Each new paragraph tag will appear on its own line vertically. Paragraphs with longer content will stretch all the way to the edge of the page. <br/>
                Inline elements display in a line. They do not force the text after them to a new line.
                </p>
            </div>
        </article>
    );
};

export default Blogs;