const NewComments = () => {
  return (
    <form>
      <div>
        <lable>name</lable>
        <input type="text" />
      </div>
      <div>
        <lable>Email</lable>
        <input type="email" />
      </div>
      <div>
        <lable>body</lable>
        <input type="textarea" />
      </div>
    </form>
  );
};

export default NewComments;
