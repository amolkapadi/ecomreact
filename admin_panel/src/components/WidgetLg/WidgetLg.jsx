import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mayank Lushte</span>
          </td>
          <td className="widgetLgDate">2 Jan 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgTr">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mayank Lushte</span>
          </td>
          <td className="widgetLgTr">2 Jan 2021</td>
          <td className="widgetLgTr">$122.00</td>
          <td className="widgetLgTr">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mayank Lushte</span>
          </td>
          <td className="widgetLgTr">2 Jan 2021</td>
          <td className="widgetLgTr">$122.00</td>
          <td className="widgetLgTr">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mayank Lushte</span>
          </td>
          <td className="widgetLgTr">2 Jan 2021</td>
          <td className="widgetLgTr">$122.00</td>
          <td className="widgetLgTr">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mayank Lushte</span>
          </td>
          <td className="widgetLgTr">2 Jan 2021</td>
          <td className="widgetLgTr">$122.00</td>
          <td className="widgetLgTr">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mayank Lushte</span>
          </td>
          <td className="widgetLgTr">2 Jan 2021</td>
          <td className="widgetLgTr">$122.00</td>
          <td className="widgetLgTr">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
