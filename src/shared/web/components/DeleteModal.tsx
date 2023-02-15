import useAPI from "@/hooks/api";
import { Button, Modal } from "antd";
import React from "react";

const DeleteModal = ({
  setModalOpen,
  item,
  modelCategory,
  refreshData,
}: any) => {
  console.log("the va==", item, modelCategory);
  const [deletePropertyRequest, { loading: deleteLoading }] = useAPI();
  const handleDeleteRequest = async () => {
    if (modelCategory === "rentalHistory")
      deletePropertyRequest({
        method: "delete",
        url: `v1/auth/rentalHistories/${item.id}`,
      });

    if (modelCategory === "educationalHistory") {
      deletePropertyRequest({
        method: "delete",
        url: `v1/auth/educationHistories/${item.id}`,
      });
    }

    setModalOpen(false);
  };
  return (
    <>
      <Button type="text" color="black" onClick={() => setModalOpen(false)}>
        Cancel
      </Button>
      <Button danger color="black" onClick={() => handleDeleteRequest()}>
        Delete
      </Button>
    </>
  );
};

export default DeleteModal;
