import React, {  useState } from 'react'
import SelectSearch from 'react-select-search';
import { lawyers } from './data.js';
import i18next from 'i18next';
import 'react-responsive-modal/styles.css';
import '../Team/Team.css';
import { Modal } from 'react-responsive-modal';
import Cemal from '../../assets/img/cemal_araalan.jpeg'
import './SearchElement.css';
  

export const SearchElement = () => {
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);


    function renderFriend(props, option, snapshot, className) {
      const imgStyle = {
          borderRadius: '50%',
          verticalAlign: 'middle',
          marginRight: 10,
          height: "50px",
          width: "50px"
      };
  
      return (
          <button {...props} className={className} type="button">
              <span><img alt="" style={imgStyle} width="32" height="32" src={option.photo} /><span>{option.name}</span></span>
          </button>
      );
    }

    const setNameFunc = () => {
      setName(name);
      setOpen(true);
    }
   
    const onCloseModal = () => {
      setOpen(false);
    };
   

    return (
        <>
            <SelectSearch
                className="select-search"
                options={lawyers}
                renderOption={renderFriend}
                onChange={setNameFunc}
                value={name}
                search
                closeOnSelect
                placeholder={i18next.t("search_lawyer")}
            />
            <div className="modal_search"> 
              <Modal open={open} onClose={onCloseModal} center classNames={{
          overlay: 'modal_search',
          modal: 'modal_content'
        }}>
                      <div className="row image_modal">
                          <div className="col-md-4 ">
                            <img src={Cemal} className="rounded mx-auto d-block" alt="Cemal Araalan" />
                          </div>
                      </div>
                      <div className="row modal_heading">
                        <div className="head_title value_title">
                                <h2>{i18next.t("cemal_heading")} </h2>
                        </div>
                        </div>
                        <div className="row">
                        <div className="ab_feature_content wow fadeIn m-top-40">
                                      <p> {i18next.t("cemal_1")} </p>
                                      <p> {i18next.t("cemal_2")} </p>
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-12 profile">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <a href="https://www.nurhakaltin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#something"
                             target="_blank"
                             rel="noopener noreferrer"
                             >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#something"
                             target="_blank"
                             rel="noopener noreferrer"
                             >
                                <i className="fab fa-instagram"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#something"
                             target="_blank"
                             rel="noopener noreferrer"
                             >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
              </Modal>
            </div>
        </>
    );
};