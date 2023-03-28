import React, {CSSProperties, useEffect, useState} from 'react';

const textStyleNoneImport: CSSProperties = {
  borderBottom : '1px solid rgba(255,255,255,.3) !important',
};

function Chatting() {
  return (
    <div>
      <div className="col-md-6 col-lg-7 col-xl-7">
				{/*상대방이 말한 채팅*/}
        <ul className="list-unstyled text-white">
          <li className="d-flex justify-content-between mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                 className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
            <div className="card mask-custom">
              <div className="card-header d-flex justify-content-between p-3"
                   style={textStyleNoneImport}>
                <p className="fw-bold mb-0">Brad Pitt</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 12
                  mins ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </li>
					{/*내가 말한 채팅*/}
          <li className="d-flex justify-content-between mb-4">
            <div className="card mask-custom w-100">
              <div className="card-header d-flex justify-content-between p-3"
                   style={textStyleNoneImport}>
                <p className="fw-bold mb-0">Lara Croft</p>
                <p className="text-light small mb-0"><i className="far fa-clock"></i> 13 mins
                  ago</p>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque
                  laudantium.
                </p>
              </div>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                 className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60" />
          </li>
					{/*입력 박스*/}
					<li className="mb-3">
            <div className="form-outline form-white">
              <textarea className="form-control" id="textAreaExample3" style={{paddingTop : '30px'}} rows={4}></textarea>
              <label className="form-label" htmlFor="textAreaExample3">Message</label>
            </div>
          </li>
          <button type="button" className="btn btn-light btn-lg btn-rounded float-end">Send</button>
        </ul>

      </div>

    </div>
  );
}

export default Chatting