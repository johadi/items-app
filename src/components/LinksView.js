import React, { Component } from "react";
import Card from "./Card";
import { checkIsOdd } from "../helpers/helpers";

export default class LinksView extends Component {
  MAX_ITEMS_LENGTH = 5;
  MAX_ODD_ITEMS_LENGTH = 3;
  MAX_EVEN_ITEMS_LENGTH = 2;

  get getLink1Status() {
    return this.props.checkedItems.get("item-1");
  }

  get getLink2Status() {
    const { checkedItems } = this.props;

    return checkedItems.get("item-3") && checkedItems.get("item-5");
  }

  get getLink3Status() {
    const { checkedItems } = this.props;

    if (checkedItems.size === this.MAX_ITEMS_LENGTH) {
      const foundItemValueIndex = Array.from(checkedItems.values()).findIndex(
        itemValue => !itemValue
      );

      return foundItemValueIndex === -1;
    }

    return false;
  }

  get getLink4Status() {
    const { checkedItems } = this.props;

    const foundItemValueIndex = Array.from(checkedItems.values()).findIndex(
      itemValue => itemValue
    );

    return foundItemValueIndex === -1;
  }

  get getLink5Status() {
    const oddItems = this.getOddOrEvenItems(true);

    if (oddItems.length === this.MAX_ODD_ITEMS_LENGTH) {
      const foundOddItemValueIndex = oddItems.findIndex(
        itemValue => !itemValue
      );

      return foundOddItemValueIndex === -1;
    }

    return false;
  }

  get getLink6Status() {
    const evenItems = this.getOddOrEvenItems(false);

    if (evenItems.length === this.MAX_EVEN_ITEMS_LENGTH) {
      const foundEvenItemValueIndex = evenItems.findIndex(
        itemValue => !itemValue
      );

      return foundEvenItemValueIndex === -1;
    }

    return false;
  }

  get getLink7Status() {
    const { checkedItems } = this.props;

    const foundItemValueIndex = Array.from(checkedItems.values()).findIndex(
      itemValue => itemValue
    );

    return foundItemValueIndex >= 0;
  }

  getOddOrEvenItems(isOdd) {
    return Array.from(this.props.checkedItems).reduce(
      (accumulator, currentValue) => {
        const itemNumber = parseInt(currentValue[0].split("-").pop(), 10);

        // returns only odd items
        if (isOdd && checkIsOdd(itemNumber)) {
          return [...accumulator, currentValue[1]];
        }

        // returns only even items
        if (!isOdd && !checkIsOdd(itemNumber)) {
          return [...accumulator, currentValue[1]];
        }

        return accumulator;
      },
      []
    );
  }

  handleClick(number) {
    alert(`You have clicked the box with number ${number}`);
  }

  render() {
    return (
      <div className="lists">
        <Card
          isChecked={this.getLink1Status}
          number="1"
          description="Enabled when item 1 is checked"
          handleClick={this.handleClick}
        />
        <Card
          isChecked={this.getLink2Status}
          number="2"
          description="Enabled when item 3 & 5 are checked"
          handleClick={this.handleClick}
        />
        <Card
          isChecked={this.getLink3Status}
          number="3"
          description="Enabled when all items are checked"
          handleClick={this.handleClick}
        />
        <Card
          isChecked={this.getLink4Status}
          number="4"
          description="Enabled when no items is checked"
          handleClick={this.handleClick}
        />
        <Card
          isChecked={this.getLink5Status}
          number="5"
          description="Enabled when all odd items are checked"
          handleClick={this.handleClick}
        />
        <Card
          isChecked={this.getLink6Status}
          number="6"
          description="Enabled when all even items are checked"
          handleClick={this.handleClick}
        />
        <Card
          isChecked={this.getLink7Status}
          number="7"
          description="Enabled when at least one item is checked"
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
