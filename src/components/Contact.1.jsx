import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Have any Questions?</p>
            <p>
              Filll out the form on your right or send me an email{' '}
              <a href="mailto:aunhengly.com">aunhengly@gmail.com</a> and I will
              get back to you.
            </p>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <label htmlFor="">Your First Name *</label>
                <input
                  type="text"
                  required="required"
                  placeholder="First Name"
                />
              </div>
              <div className="col">
                <label htmlFor="">Your Last Name *</label>
                <input
                  type="text"
                  required="required"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="">Your Email *</label>
                <input type="text" required="required" placeholder="Email" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="">Your Message for me *</label>
                <textarea type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};
export default Contact;

const ContactWrapper = styled.div`
  height: 100%;
  background-color: white;
  padding: 20px 400px;
  font-size: 20px;
  text-align: left;

  h1 {
    font-size: 60px;
    padding: 30px 0;
  }

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .row {
        display: flex;
        flex-direction: row;
        .col {
          display: flex;
          width: 100%;
          padding: 5px 10px;
          justify-content: space-between;
        }
      }
    }
  }

  p {
    font-size: 30px;
    padding: 30px 0 10px 30px;
    /* line-height: 10px; */
  }

  input {
    border: 1px solid grey;
    font-size: 15px;
    border-radius: 5px;
    height: 30px;
    width: 100%;
  }

  textarea {
    border: 1px solid grey;
    font-size: 20px;
    border-radius: 5px;
    width: 400px;
    height: 100px;
  }

  button {
    margin: 20px 0 20px;
    padding: 8px 0;
    border: 1px solid grey;
    border-radius: 5px;
    width: 100%;
  }
`;
