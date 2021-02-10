import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions/userActions";

export const User = (props: any) => {
  useEffect(() => {
    console.log(props)
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2>Usuarios</h2>
    </>
  )
};

const mapStateToProps = (state: any) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
