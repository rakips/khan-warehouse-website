import React, { useEffect } from "react";

const Blogs = () => {
    //refresh and get top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div style={{ overflowX: "hidden", overflowY: "hidden" }} className="md:px-28 px-5 md:my-20 my-10">
            <div className="border border-[#ad6449] p-4 mb-3">
                <h1 className="text-center py-4 text-3xl font-semibold text-[#c76f4f] md:md-0 mb-3">
                    Difference between Javascript and NodeJs!
                </h1>
                <div className="flex  md:flex-row flex-col items-center gap-10 leading-7">
                    <img
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="w-1/2 "
                        src="https://i.morioh.com/2021/08/30/4d4f4083.webp"
                        alt=""
                    />

                    <p
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="text-xl text-justify"
                    >
                        Javascript is a programming language where we srite scripts on a site that makes it more
                        dynamic,on the other hand NodeJs is a javascript runtime environment that lets a user run js in
                        server side as well.We can run javascript for browser only but NodeJs helps us to create softwares
                        for pc. We can write HTML & CSS in the browser and interact them with js but NodeJS is not capable
                        of doing so. Some popular framework for js are ReactJs,VueJs etc and for NodeJs they are
                        ExpressJs,Loadash etc.
                    </p>
                </div>
            </div>
            <div className="border border-[#ad6449] p-4 mb-3">
                <h1 className="text-center py-4 text-3xl font-semibold text-[#c76f4f] md:md-0 mb-3">
                    When should you use NodeJS and when should you use MongoDB?
                </h1>
                <div className="flex md:flex-row flex-col items-center gap-10 leading-7">
                    <img
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="w-1/2"
                        src="https://miro.medium.com/max/720/1*ay9nx1XdZ3AOzx5Ev8xJEg.png"
                        alt=""
                    />

                    <p
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="text-xl text-justify"
                    >
                        If we are considering making a large application like real-time applications,online gaming
                        apps,video conferencing apps or E-commerce transiction software then NodeJs is perfect for making
                        these.As we know NodeJs is good for highly extensible,data intensive application and it's
                        non-blocking I/O features makes a app super fast so then we should use NodeJs. <br />
                        MongoDB is a general purpose db used in various ways to support application.When we are working
                        with lots of data and we need flexibility and power to manage unstructured plus complex data then
                        we should consider using MongoDB.
                    </p>
                </div>
            </div>
            <div className="border border-[#ad6449] p-4 mb-3">
                <h1 className="text-center py-4 text-3xl font-semibold text-[#c76f4f] md:md-0 mb-3">
                    Differences between SQL and NoSQL databases!
                </h1>
                <div className="flex md:flex-row flex-col items-center gap-10 leading-7">
                    <img
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="w-1/2"
                        src="https://miro.medium.com/max/1200/1*uholdYDSjM-a75MVwoY1Zw.png"
                        alt=""
                    />

                    <p
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="text-xl text-justify"
                    >
                        SQL or 'Structured Query Language', means data are stored in a relational format like rows and
                        columns.SQL is bascically a programmming language which performs its tasks like update in db or
                        retrive data from db.There's lots of differences with NoSQL <br />
                        NoSQL or "Not only Structured", means data are unstructured where data can be stored in multiple
                        collection and there is no need of any fixed table schemas.We can store lots of data without
                        structure.Mainting data is quite easy and flexible than SQL as SQL's data may share in different
                        servers.
                    </p>
                </div>
            </div>
            <div className="border border-[#ad6449] p-4 mb-3">
                <h1 className="text-center py-4 text-3xl font-semibold text-[#c76f4f] md:md-0 mb-3">
                    What is the purpose of jwt and how does it work?
                </h1>
                <div className="flex md:flex-row flex-col items-center gap-10 leading-7">
                    <img
                        data-aos="fade-right"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="w-1/2"
                        src="http://jwt.io/img/logo-asset.svg"
                        alt=""
                    />

                    <p
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                        className="text-xl text-justify"
                    >
                        JWT or JSON Web Token,is an open standard used to share security information between two parties,
                        a client and a server.Each JWT contains encoded JSON objects,including a set of claims.JWTs are
                        signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token
                        is issued.To authenticate a user,a client application must send a JSON Web Token in the
                        authorization header of the HTTP request to our backend API.API Gateway validates the token on
                        behalf of our API, so we don't have to add any code in our API to process the authentication.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;