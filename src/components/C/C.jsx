import React from 'react';
import { AppContext } from '../../App.js';

export const C = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <div>
            {context.locales.home}
            <button onClick={context.changeLocales('ru')}>
              RU
            </button>
            <button onClick={context.changeLocales('en')}>
              EN
            </button>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
