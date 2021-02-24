
/** eslint-disable **/
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect'

const initialState = {
  zone: {
    data: [
      {
        countryCode: 'AD',
        countryName: 'Andorra',
        zoneName: 'Europe/Andorra',
        gmtOffset: 3600,
        timestamp: 1614084530,
      },
      {
        countryCode: 'AL',
        countryName: 'Albania',
        zoneName: 'Europe/Albania',
        gmtOffset: 3600,
        timestamp: 1614084530,
      },
    ],
  },
}

const mockStore = configureMockStore()

function render(
  ui,
  { store = mockStore(initialState), ...renderOptions } = {}
) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
