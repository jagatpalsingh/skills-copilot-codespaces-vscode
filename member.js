function skillsMember(){
    return {
        reestrict: 'E',
        templateUrl: 'templates/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl',
        bindToController: true,
        scope: {
            member:'='
        }
    };
}