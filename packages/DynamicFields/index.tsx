
import * as React from 'react'
import { IOption } from '@duik/types'

import * as cls from './styles.module.scss'

export interface TDynamicFieldsProps {
 name?: string,
 activeOptions?: IOption[],
 options?: IOption[],
 placeholder?: React.ReactNode
}

const DynamicFields: React.SFC<TDynamicFieldsProps> = ({
  activeOptions,
  options,
  name,
  placeholder
}) => {

  const [ state, setState ] = React.useState(1)

  return <button className={cls.dynamicFields} onClick={() => setState(state + 1)}>Hello,qweqwe {state}</button>;
}
DynamicFields.defaultProps = {
 name: "Guest Useqwer", // This value is adopted when name prop is omitted.
}

export default DynamicFields
