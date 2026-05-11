import { Link } from "react-router";
const ContactPage = () => {
  return (
    <div>
      <h2>
        Contact Us <br /> We love to chat
      </h2>
      <div>
        <form action=""></form>
      </div>
      <div>
        <Link
          to={
            "https://zalo.me/606774801821902742?fbclid=IwY2xjawRemDRleHRuA2FlbQIxMABicmlkETF4YmNteEdWRmpRTUZWckpFc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgf3zV4KVroYQDzb4Smjmyie3JLkRKzMj1Wk8VgHUcr4YsR7gaXykPVbrpw1_aem_FGoEEnD7CIeMN_-FRBzEkA"
          }
        >
          Zalo
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
