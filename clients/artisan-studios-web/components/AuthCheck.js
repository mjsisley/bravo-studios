const authCheck = () => true;

export default ({ failComp, failAction, children }) =>
  authCheck() ? children : failAction ? failAction() : failComp;
