import React, { useEffect, useState } from 'react';
import './FAQ.css';
import assets from '../assets';
import Divider from './UI/Divider';
import { v4 as uuidv4 } from 'uuid';
import { MdKeyboardArrowUp } from 'react-icons/md';

const FAQS = [
  {
    id: uuidv4(),
    question: 'How many team members can I invite?',
    answer: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
    maxHeight: 0,
    open: false,
  },
  {
    id: uuidv4(),
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
    maxHeight: 0,
    open: false,
  },
  {
    id: uuidv4(),
    question: 'How do I reset my password?',
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    maxHeight: 0,
    open: false,
  },
  {
    id: uuidv4(),
    question: 'Can I cancel my subscription?',
    answer:
      'Yes! Send us a message and we’ll process your request no questions asked.',
    maxHeight: 0,
    open: false,
  },
  {
    id: uuidv4(),
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    maxHeight: 0,
    open: false,
  },
];

const RenderFAQHeader = ({ open, question }) => {
  if (open) {
    return <h2 className="faq-title">{question}</h2>;
  }
  return <p className="faq-title">{question}</p>;
};

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs(FAQS);
  }, []);

  const toggleFAQ = (e, id) => {
    const panel = e.target.parentElement.nextSibling;

    const maxHeight = `${panel.scrollHeight}px`;
    setFaqs((prev) => {
      return prev.map((faq) => {
        if (faq.id === id) {
          return {
            ...faq,
            maxHeight: faq.maxHeight === 0 ? maxHeight : 0,
            open: !faq.open,
          };
        } else {
          return faq;
        }
      });
    });
  };

  return (
    <div className="faq">
      <div className="faq-illustration">
        <div className="img-wrapper">
          <img
            src={assets.illustrationWomanOnline}
            id="woman-online"
            alt="woman online"
          />
          <img src={assets.illustrationBox} id="box" alt="box" />
        </div>
      </div>
      <div className="faq-text">
        <h1>FAQ</h1>
        {faqs.map((faq, index) => {
          return (
            <div
              key={faq.id}
              onClick={(e) => toggleFAQ(e, faq.id)}
              className={`faq-wrapper ${index !== faqs.length - 1 && 'p-b'}`}
            >
              <div className="faq-header">
                <RenderFAQHeader question={faq.question} open={faq.open} />
                <div className="faq-header-icon">
                  {faq.open ? (
                    <MdKeyboardArrowUp color="hsl(14, 88%, 65%)" />
                  ) : (
                    <img src={assets.iconArrowDown} alt="arrow down icon" />
                  )}
                </div>
              </div>
              <p className={`faq-answer`} style={{ maxHeight: faq.maxHeight }}>
                {faq.answer}
              </p>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
