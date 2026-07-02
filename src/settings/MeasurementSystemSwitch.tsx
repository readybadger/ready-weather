import useSettings from './use-settings'

export const MeasurementSystemSwitch = () => {
  const {
    settings: { measurementSystem },
    updateSettings,
  } = useSettings()

  return (
    <div className="flex space-x-px items-center">
      <button
        className={` border-b px-2 py-1 text-sm text-white rounded-md cursor-pointer ${measurementSystem === 'metric' ? 'border-b-emerald-200 font-semibold bg-emerald-700' : 'border-b-transparent'}`}
        onClick={() => {
          updateSettings({
            measurementSystem: 'metric',
          })
        }}
      >
        Metric
      </button>
      <button
        className={` border-b px-2 py-1 text-sm text-white rounded-md cursor-pointer ${measurementSystem === 'imperial' ? 'border-b-emerald-200 font-semibold bg-emerald-700' : 'border-b-transparent'}`}
        onClick={() => {
          updateSettings({
            measurementSystem: 'imperial',
          })
        }}
      >
        Imperial
      </button>
    </div>
  )
}
