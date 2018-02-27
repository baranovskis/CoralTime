﻿using CoralTime.ViewModels.Interfaces;
using CoralTime.ViewModels.Member;
using CoralTime.ViewModels.Profiles;
using Microsoft.AspNetCore.Http;

namespace CoralTime.BL.Interfaces
{
    public interface IAvatarService
    {
        string GetAvatarUrl(int memberId);

        string GetIconUrl(int memberId);

        MemberAvatarView SetUpdateMemberAvatar(IFormFile uploadedFile);

        void AddIconUrlInMemberView(MemberView memberView);

        void AddIconUrlInViewModel(IAvatarViewModel memberView);

        void SaveAllIconsAndAvatarsInStaticFiles();
    }
}