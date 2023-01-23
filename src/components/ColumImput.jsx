
const ColumImput = ({ classname, label, type, name, value, onChange }) => {
  return (
    <div className={classname}>
      <label htmlFor="">{label}</label>
      <div>
        <input
          type={type}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ColumImput;
