import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, DatePicker } from "antd";
import moment from "moment";
// 限制范围1年内，最多选7天

const { RangePicker } = DatePicker;
const CtmDate = (props: any) => {
  const [dates, setDates] = useState<any>([]);
  const [hackValue, setHackValue] = useState<any>();
  const [value, setValue] = useState();
  const disabledDate = (current: any) => {
    const last = moment().subtract("1", "years").subtract("0", "days");
    const next = moment().subtract("-1", "years").subtract("1", "days");

    const beforeLastYear = moment(current).valueOf() - last.valueOf() < 0;
    const afterNextYear = moment(current).valueOf() - next.valueOf() > 0;

    if (beforeLastYear || afterNextYear) return true;
    if (!dates || dates.length === 0) {
      return false;
    }

    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1]?.diff?.(current, "days") > 7;
    return tooEarly || tooLate;
  };

  const onOpenChange = (open: any) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };
  return (
    <RangePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val: any) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};

export default {
  title: "Example/Date",
  component: Button,
} as ComponentMeta<typeof RangePicker>;

const Template: ComponentStory<typeof RangePicker> = (args) => (
  <CtmDate {...args} />
);

export const Primary = Template.bind({});
