import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    saveForm(ev) {
      ev.preventDefault();
      let userInfo = {
        "username": this.username,
        "email": this.email,
        "introduction": this.introduction,
       };
      let user = this.store.createRecord('user', userInfo);
      user.save().then(() => {
        this.transitionToRoute('confirmation');
      }).catch((e) => {
        alert(e.errors[0].detail);
      })
    }
  }
});
