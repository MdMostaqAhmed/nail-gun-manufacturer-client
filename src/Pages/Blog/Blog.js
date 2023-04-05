import React, { useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Blog = () => {





    return (
        <div className="w-full mx-auto lg:w-[80vw] my-4 min-h-screen">
            <h2 className="text-3xl font-bold text-secondary text-center font-serif my-10" >
                My Blog{" "}
            </h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How will you improve the performance of a React Application?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div>
                            <span className="font-semibold">
                                Some Tips and Tricks for Improving React Application Performance
                                are as Follows :
                            </span>
                            <ol>
                                <li className="list-decimal">
                                    Using Immutable Data Structures
                                </li>
                                <li className="list-decimal">
                                    Function/Stateless Components and React.PureComponent
                                </li>
                                <li className="list-decimal">
                                    Keeping component state local where necessary.
                                </li>
                                <li className="list-decimal">
                                    Memoizing React components to prevent unnecessary re-renders
                                </li>
                                <li className="list-decimal">
                                    Avoid Inline Function Definition in the Render Function.
                                </li>
                                <li className="list-decimal">
                                    Avoid using Index as Key for map
                                </li>
                                <li className="list-decimal">
                                    Avoiding Props in Initial States
                                </li>
                                <li className="list-decimal">
                                    Code-splitting in React using dynamic import()
                                </li>
                                <li className="list-decimal">
                                    Spreading props on DOM elements
                                </li>
                                <li className="list-decimal">
                                    CSS Animations Instead of JS Animations
                                </li>
                            </ol>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are the different ways to manage a state in a React
                            application?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            There are four main types of state you need to properly manage in
                            your React apps:
                        </p>
                        <ul>
                            <li className="list-disc">
                                Local state Global state Server state URL state
                            </li>
                            <li className="list-disc">Global state</li>
                            <li className="list-disc">Server state</li>
                            <li className="list-disc">URL state</li>
                        </ul>{" "}
                        <br /> <br />
                        <b>Local (UI) state :</b>Data that we handle in one or more
                        components is referred to as local state. The useState hook is most
                        commonly used in React to manage local state. <br /> <br />
                        <b>Global (UI) state : </b> Data that we handle across several
                        components is referred to as global state. When we wish to acquire
                        and update data anywhere in our app, or at least across several
                        components, we need global state. <br /> <br />
                        <b>Server state :</b> Data from an external server that has to be
                        combined with our current UI state. Server state is a basic idea,
                        but it may be difficult to maintain in conjunction with all of our
                        local and global UI state. <br /> <br />
                        <b> URL state :</b> Data found on our URLs, such as pathnames and
                        query parameters. The category of URL state is sometimes overlooked,
                        yet it is an essential one. Many significant aspects of our
                        application rely on URL state access in many circumstances. Consider
                        how difficult it would be to create a blog without the ability to
                        retrieve a post based on its slug or id in the URL!
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How does prototypical inheritance work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Simply put, prototype inheritance refers to the ability to access
                            properties of one object from another. To extend the functionality
                            of an existing object constructor, we use a JavaScript prototype.
                            Then we can tell our JS code to inherit properties from the
                            prototype. Through the use of a reference pointer function,
                            prototypical inheritance allows us to reuse properties or methods
                            from one JavaScript object to another.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Why you do not set the state directly in React. For example, if
                            you have const [products, setProducts] = useState([]). Why you do
                            not set products = [...] instead, you use the setProducts
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            One should never update the state directly because of the
                            following reasons: If you update it directly, calling the
                            setState() afterward may just replace the update you made. When
                            you directly update the state, it does not change this.state
                            immediately. Instead, it creates a pending state transition, and
                            accessing it after calling this method will only return the
                            present value. You will lose control of the state across all
                            components.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            You have an array of products. Each product has a name, price,
                            description, etc. How will you implement a search to find products
                            by name?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <img src="https://i.ibb.co/F3LJmBV/Screenshot-391.png" alt="" />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is a unit test? Why should write unit tests?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Unit testing's main goal is to isolate written code in order to
                            test and determine if it works as intended. Unit testing is an
                            important step in the development process because, if done
                            correctly, it can help detect early flaws in code that would
                            otherwise be difficult to find in later stages of testing.
                        </p>
                        <p>
                            Before deploying code, unit testing ensures that it meets quality
                            standards. This ensures a dependable engineering environment that
                            prioritizes quality. Unit testing helps developers write better
                            code faster and saves time and money throughout the product
                            development life cycle.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;