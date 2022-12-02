import React, { useContext } from "react";
import { authContext } from "../../Authentication/Auth/Auth";

const Modal = ({info}) => {
    const {user}= useContext(authContext);
  return (
    <div>
      <input type="checkbox" id="book-now" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="book-now"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
           Book Your Choice
          </h3>
          <p className="py-4">
          <input type="text" placeholder="Type here" className="input input-bordered w-full" readOnly defaultValue={user?.displayName}/>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" readOnly defaultValue={user?.email}/>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" readOnly defaultValue={info.id}/>
          <input type="int" placeholder="Type here" className="input input-bordered w-full"  placeholder='Phone no'/>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" placeholder='Meeting Location'/>

          </p>
          <div className="modal-action">
            <label htmlFor="book-now" className="btn btn-primary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
