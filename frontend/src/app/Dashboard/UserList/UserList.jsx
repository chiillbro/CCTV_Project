import { useState, useEffect } from "react";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../../redux/api/usersApi.js";
import { toast } from "react-toastify";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Message from "../../utils/Message.jsx";
import Loader from "../../utils/Loader.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

const UserList = () => {
  const { data: users, refetch, isLoading, error } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  console.log(users);

  const [editableUserId, setEditableUserId] = useState(null);
  const [editableUserName, setEditableUserName] = useState("");
  const [editableUserEmail, setEditableUserEmail] = useState("");
  const [editableUserEmployeeId, setEditableUserEmployeeId] = useState("");
  const [editableUserState, setEditableUserState] = useState("");
  const [editableUserPassword, setEditableUserPassword] = useState("");

  useEffect(() => {
    refetch();
  }, [refetch]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        refetch();
        toast.success("User deleted successfully");
      } catch (err) {
        toast.error(err.data?.message || err.error);
      }
    }
  };

  const toggleEdit = (id, username, email, employeeId, state, password) => {
    setEditableUserId(id);
    setEditableUserName(username);
    setEditableUserEmail(email);
    setEditableUserEmployeeId(employeeId);
    setEditableUserState(state);
    setEditableUserPassword(password);
  };

  const updateHandler = async (id) => {
    try {
      await updateUser({
        userId: id,
        username: editableUserName,
        email: editableUserEmail,
        employeeId: editableUserEmployeeId,
        state: editableUserState,
        password: editableUserPassword,
      });
      console.log(updateUser);
      setEditableUserId(null);
      refetch();
      toast.success("User updated successfully");
    } catch (err) {
      toast.error(err.data?.message || err.error);
    }
  };

  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div>
        <h1 className="text-2xl font-semibold ml-[100px]  my-[50px]">
          Agents Details
        </h1>
        <div className="flex w-[90vw] justify-end py-[10px]">
          <Link
            to="register"
            className="bg-black hover:bg-transparent font-semibold py-2 px-7 border border-gray-400 hover:border-gray-400 rounded"
          >
            Agent +
          </Link>
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* <AdminMenu /> */}
            <table className="w-full md:w-4/5 mx-auto border border-gray-700  bg-gray-800">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">AGENT NAME</th>
                  <th className="px-4 py-2 text-left">EMAIL</th>
                  <th className="px-4 py-2 text-left">EMP ID</th>
                  <th className="px-4 py-2 text-left">STATE</th>
                  <th className="px-4 py-2 text-left">PASSWORD</th>
                  <th className="px-4 py-2 text-left">ADMIN</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-2">{user._id}</td>
                    <td className="px-4 py-2">
                      {editableUserId === user._id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editableUserName}
                            onChange={(e) =>
                              setEditableUserName(e.target.value)
                            }
                            className="w-full p-2 border rounded-lg"
                          />
                          <button
                            onClick={() => updateHandler(user._id)}
                            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                          >
                            <FaCheck />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          {user.username}{" "}
                          <button
                            onClick={() =>
                              toggleEdit(
                                user._id,
                                user.username,
                                user.email,
                                user.employeeId,
                                user.state,
                                user.password
                              )
                            }
                          >
                            <FaEdit className="ml-[1rem]" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editableUserId === user._id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editableUserEmail}
                            onChange={(e) =>
                              setEditableUserEmail(e.target.value)
                            }
                            className="w-full p-2 border rounded-lg"
                          />
                          <button
                            onClick={() => updateHandler(user._id)}
                            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                          >
                            <FaCheck />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                          <button
                            onClick={() =>
                              toggleEdit(
                                user._id,
                                user.name,
                                user.email,
                                user.employeeId,
                                user.state,
                                user.password
                              )
                            }
                          >
                            <FaEdit className="ml-[1rem]" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editableUserId === user._id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editableUserEmployeeId}
                            onChange={(e) =>
                              setEditableUserEmployeeId(e.target.value)
                            }
                            className="w-full p-2 border rounded-lg"
                          />
                          <button
                            onClick={() => updateHandler(user._id)}
                            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                          >
                            <FaCheck />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <a href={`mailto:${user.employeeId}`}>
                            {user.employeeId}
                          </a>{" "}
                          <button
                            onClick={() =>
                              toggleEdit(
                                user._id,
                                user.name,
                                user.email,
                                user.employeeId,
                                user.state,
                                user.password
                              )
                            }
                          >
                            <FaEdit className="ml-[1rem]" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editableUserId === user._id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editableUserState}
                            onChange={(e) =>
                              setEditableUserState(e.target.value)
                            }
                            className="w-full p-2 border rounded-lg"
                          />
                          <button
                            onClick={() => updateHandler(user._id)}
                            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                          >
                            <FaCheck />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <a href={`mailto:${user.state}`}>{user.state}</a>{" "}
                          <button
                            onClick={() =>
                              toggleEdit(
                                user._id,
                                user.name,
                                user.email,
                                user.employeeId,
                                user.state,
                                user.password
                              )
                            }
                          >
                            <FaEdit className="ml-[1rem]" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editableUserId === user._id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editableUserPassword}
                            onChange={(e) =>
                              setEditableUserPassword(e.target.value)
                            }
                            className="w-full p-2 border rounded-lg"
                          />
                          <button
                            onClick={() => updateHandler(user._id)}
                            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                          >
                            <FaCheck />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <a href={`mailto:${user.Password}`}>
                            {user.Password}
                          </a>{" "}
                          <button
                            onClick={() =>
                              toggleEdit(
                                user._id,
                                user.name,
                                user.email,
                                user.employeeId,
                                user.state,
                                user.password
                              )
                            }
                          >
                            <FaEdit className="ml-[1rem]" />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {user.isAdmin ? (
                        <FaCheck style={{ color: "green" }} />
                      ) : (
                        <FaTimes style={{ color: "red" }} />
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {!user.isAdmin && (
                        <div className="flex">
                          <button
                            onClick={() => deleteHandler(user._id)}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
