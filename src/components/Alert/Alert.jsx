import clsx from "clsx";
import css from './Alert.module.css'
import {UserMenu} from '../UserMenu/UserMenu'

export const Alert = ({ variant, outlined, elevated, children }) => {
  const clsxClasses = clsx(css[variant], {
    [css.isOutlined] : outlined,
    [css.isElevated] : elevated
  });

  return (
    <p className={clsxClasses}>
      {children} <UserMenu />
    </p>
  );
};