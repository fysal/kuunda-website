import React from "react";

const ExpertAvatars = () => {
  return (
    <div className="avatar-group -space-x-6">
      <div className="avatar">
        <div className="w-12">
          <img src="https://as2.ftcdn.net/jpg/01/90/17/51/1000_F_190175122_pqOXT0HFw9A6E9omNiCtUvg8KxuOBrUr.jpg" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://thumbs.dreamstime.com/b/handsome-young-black-man-serious-expression-face-close-up-portrait-45080832.jpg" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          {" "}
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>
      <div className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-12">
          <span>+10</span>
        </div>
      </div>
    </div>
  );
};

export default ExpertAvatars;
