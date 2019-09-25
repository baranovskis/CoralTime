using System;

namespace CoralTime.Common.Exceptions
{
    public class CoralTimeYouTrackException : Exception
    {
        public CoralTimeYouTrackException() { }

        public CoralTimeYouTrackException(string message) 
            : base(message) { }

        public CoralTimeYouTrackException(string message, Exception innerException) 
            : base(message, innerException) { }
    }
}
