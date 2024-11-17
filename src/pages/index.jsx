import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import UserCard from "../components/user-card";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <h1>Hi Zalo dating!</h1>
      <Suspense>
        <div className="section-container">
          <UserCard />
        </div>
      </Suspense>
      <div className="section-container">
        <List>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>test</div>
          </List.Item>
        </List>
      </div>
    </Page>
  );
};

export default HomePage;
