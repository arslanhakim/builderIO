import React from "react";
import { IoFlameOutline, IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineStarBorder } from "react-icons/md";
import Image from "next/image";

const MealComponent = ({ type, title, calories, score, ratings, img }: any) => {
  return (
    <div className="meal ">
      <Image
        src="https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        className="w-full"
        width={50}
        height={50}
        alt="Japanese Gyozas"
      />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vagetarian">Vegetari</span>
        </div>
        <p className="meal-title">Japanese Gyozas</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <IoFlameOutline className="meal-icon" fill="#e67e22" />
            <span>
              <strong>650</strong> calories
            </span>
          </li>
          <li className="meal-attribute">
            <IoRestaurantOutline className="meal-icon" />
            <span>
              NutriScore ® <strong>74</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <MdOutlineStarBorder className="meal-icon" />
            <span>
              {" "}
              <strong>4.9</strong> rating (537)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealComponent;
