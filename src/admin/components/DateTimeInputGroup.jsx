import { toLocalDate, toLocalISOString } from '@/utils/date'
import { Card, CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useEffect, useMemo, useState } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

const DateTimeInputGroup = ({ label, min, max, name }) => {
  const [field, meta, helpers] = useField(name)
  const hasError = meta.touched && meta.error

  const [date, setDate] = useState(() => (field.value ? toLocalDate(new Date(field.value)) : ''))
  const [hour, setHour] = useState(() =>
    field.value ? new Date(field.value).getHours().toString() : '',
  )
  const [minute, setMinute] = useState(() =>
    field.value ? new Date(field.value).getMinutes().toString() : '',
  )

  const minValue = useMemo(() => {
    const datetime = new Date(min)

    return {
      date: datetime,
      localDate: toLocalDate(datetime),
      hour: datetime.getHours(),
      minute: datetime.getMinutes(),
    }
  }, [min])

  const maxValue = useMemo(() => {
    const datetime = new Date(max)

    return {
      date: datetime,
      localDate: toLocalDate(datetime),
      hour: datetime.getHours(),
      minute: datetime.getMinutes(),
    }
  }, [max])

  const isMinDateSelected = useMemo(() => date === minValue.localDate, [date, minValue])

  const isMaxDateSelected = useMemo(() => date === maxValue.localDate, [date, maxValue])

  const hourFields = useMemo(() => {
    return new Array(24).fill(0).map((_, index) => ({
      value: `${index}`,
      label: index.toString().padStart(2, '0'),
      disabled:
        (isMinDateSelected && index < minValue.hour) ||
        (isMaxDateSelected && index > maxValue.hour),
    }))
  }, [minValue, isMinDateSelected, maxValue, isMaxDateSelected])

  const minuteFields = useMemo(() => {
    return new Array(60).fill(0).map((_, index) => ({
      value: `${index}`,
      label: index.toString().padStart(2, '0'),
      disabled:
        (isMinDateSelected && hour == minValue.hour && index < minValue.minute) ||
        (isMaxDateSelected && hour == maxValue.hour && index > maxValue.minute),
    }))
  }, [minValue, isMinDateSelected, maxValue, isMaxDateSelected, hour])

  useEffect(() => {
    if (!date || !hour || !minute) return

    const selectedDateTime = new Date(date)

    selectedDateTime.setHours(hour)
    selectedDateTime.setMinutes(minute)

    if (selectedDateTime < minValue.date) {
      setDate(minValue.localDate)
      setHour(minValue.hour.toString())
      setMinute(minValue.minute.toString())
      return
    }

    if (selectedDateTime > maxValue.date) {
      setDate(maxValue.localDate)
      setHour(maxValue.hour.toString())
      setMinute(maxValue.minute.toString())
      return
    }

    const value = toLocalISOString(selectedDateTime)

    if (value && value !== field.value) {
      helpers.setValue(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, hour, minute, min, max, minValue, maxValue])

  useEffect(() => {
    if (!field.value) return
    const selectedDateTime = new Date(field.value)

    setDate(toLocalDate(selectedDateTime))
    setHour(selectedDateTime.getHours().toString())
    setMinute(selectedDateTime.getMinutes().toString())
  }, [field.value])

  return (
    <>
      <Label>{label}</Label>
      <div
        tabIndex="-1"
        onBlur={() => helpers.setTouched(true)}
      >
        <Card className={classNames(hasError ? 'border-red-500' : '')}>
          <CardContent>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-2">
                <Label className="mb-2">Tarih</Label>
                <Input
                  className="w-full"
                  type="date"
                  label={label}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={minValue.localDate}
                  max={maxValue.localDate}
                />
              </div>
              <div>
                <Label className="mb-2">Saat</Label>
                <Select
                  onValueChange={(value) => setHour(value)}
                  value={hour}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Saat" />
                  </SelectTrigger>
                  <SelectContent>
                    {hourFields.map((field) => (
                      <SelectItem
                        key={field.value}
                        value={field.value}
                        disabled={field?.disabled}
                      >
                        {field.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2">Dakika</Label>
                <Select
                  onValueChange={(value) => setMinute(value)}
                  value={minute}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder="Dakika"
                      value={minute}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {minuteFields.map((field) => (
                      <SelectItem
                        key={field.value}
                        value={field.value}
                        disabled={field?.disabled}
                      >
                        {field.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          {hasError && (
            <CardFooter>
              <p className="text-red-500 text-sm">{meta.error}</p>
            </CardFooter>
          )}
        </Card>
      </div>
    </>
  )
}

export default DateTimeInputGroup
