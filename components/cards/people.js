import { Avatar, List } from "antd";
import { useContext } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import {imageSource} from "../../functions";

const People = ({ people, handleFollow }) => {
  const [state] = useContext(UserContext);
  const router = useRouter();


  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between">
                  {user.username}{" "}
                  <span
                    onClick={() => handleFollow(user)}
                    className="text-primary pointer"
                  >
                    follow
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default People;