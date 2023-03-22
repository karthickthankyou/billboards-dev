import { LinearProgress, LinearProgressProps } from '@mui/material'

export const ProgressBar = (props: LinearProgressProps) => {
  return (
    <LinearProgress
      classes={{
        bar: 'bg-black',
        colorPrimary: 'bg-gray-300',
        bar1Determinate: 'bg-black',
        bar1Buffer: 'bg-black',
        bar2Buffer: 'bg-gray-500',
        bar1Indeterminate: 'bg-black',
      }}
      {...props}
    />
  )
}
