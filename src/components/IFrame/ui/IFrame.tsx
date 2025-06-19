import cls from './IFrame.module.css';
import { classNames } from '../../../shared/lib/classNames/classNames';

export const IFrame = () => {
  return (
    <div className={classNames(cls.block, {}, [])}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3207!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={classNames(cls.iframe, {}, [])}
      ></iframe>
    </div>
  )
}