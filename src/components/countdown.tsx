"use client";
import { Component } from "react";
import config from "../app/config.json";
import type { FC } from "react";

type CountProps = {
  label: string
  value: number
}

type CountdownState = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Count : FC<CountProps> = props => {
  const { label, value } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="border border-gray-700 rounded-full w-16 h-16 flex justify-center items-center">
        <span className="text-velvet text-2xl font-semibold">{value}</span>
      </div>
      <div className="uppercase text-gray-700 text-xs mt-1">
        {label}
      </div>
    </div>
  );
}

class Countdown extends Component<{}, CountdownState> {
  private counter: NodeJS.Timer | undefined;

  public constructor(props: {}) {
    super(props);
    this.calculateCount = this.calculateCount.bind(this);
    this.state = this.calculateCount();
  }
  
  public componentDidMount(): void {
    this.counter = setInterval(() => {
      const values = this.calculateCount();
      this.setState(values);
    }, 1000);
  }

  public componentWillUnmount(): void {
    clearInterval(this.counter);
  }

  private calculateCount(): CountdownState {
    const now = Math.max(config.wedding.epoch - Date.now(), 0);
    const seconds = Math.floor((now / 1000) % 60);
    const minutes = Math.floor((now / 60000) % 60);
    const hours = Math.floor((now / 3600000) % 24);
    const days = Math.floor(now / 86400000);
    return { days, hours, minutes, seconds };
  }

  public render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="flex">
        <Count label="Days" value={days} />
        <div className="text-black text-2xl mt-4 mx-1">:</div>
        <Count label="Hours" value={hours} />
        <div className="text-black text-2xl mt-4 mx-1">:</div>
        <Count label="Minutes" value={minutes} />
        <div className="text-black text-2xl mt-4 mx-1">:</div>
        <Count label="Seconds" value={seconds} />
      </div>
    );
  }
}

export default Countdown;
